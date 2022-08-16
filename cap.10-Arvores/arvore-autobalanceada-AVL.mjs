import {Compare, defaultCompare} from '../util.mjs'
import BinarySearchTree from './arvore-binaria-de-busca.mjs'
import {Node} from '../models/class-node.mjs'

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

export default class AVLTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null
    }
    getNodeHeight(node){
        if(node == null){
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), 
        this.getNodeHeight(node.right))+1
    }
    getBalanceFactor(node){
        const heightDiference = this. getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch(heightDiference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1: 
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT    
            case 2:
                return BalanceFactor.UNBALANCED_LEFT    
            default:
                return BalanceFactor.BALANCED    
        }
    }
    /////////////////////// ROTAÇÃO SIMPLES
    rotationLL(node){
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    rotationRR(node){
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    /////////////////////// ROTAÇÃO DUPLA
    rotationLR(node){
        node.left = this.rotationRR(node.left)
        return this.rotationLL(node)
        
    }
    rotationRL(node){
        node.right = this.rotationLL(node.right)
        return this.rotationRR(node)
    }

    insert(key){
        this.root = this.insertNode(this.root, key)
    }
    insertNode(node, key){
        if(node == null){
            return new Node(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            node.right = this.insertNode(node.right, key)
        } else {
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            if(this.compareFn(key, node.left.key) === Compare.LESS_THAN){
                node = this.rotationLL(node)
            } else {
                return this.rotationLR(node)
            }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            if(this.compareFn(key, node.right.key) === Compare.BIGGER_THAN){
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node)
            }
        }
        return node;
    }

    removeNode(node, key){
        node = super.removeNode(node, key);
        if(node == null){
            return node;
        }
        const balanceFactor = this.getBalanceFactor(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if(balanceFactorLeft === BalanceFactor.BALANCED || 
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                    return this.rotationLL(node)
                }
                if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                    return this.rotationLR(node.left)
                }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if(balanceFactorRight ===BalanceFactor.BALANCED ||
                balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                    return this.rotationRR(node)
                }
                if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                    return this.rotationRL(node.right)
                }
        }
        return node;
    }



}

const avl = new AVLTree();


avl.insert(10)
avl.insert(4);
avl.insert(5)
avl.insert(3)
avl.insert(2)

avl.remove(2)


//console.log(avl.getBalanceFactor(3))
console.log(avl)
