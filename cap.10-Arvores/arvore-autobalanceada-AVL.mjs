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
    getBalancedFactor(node){
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



}

const avl = new AVLTree()
avl.insert(10)
avl.insert(5)
avl.insert(4)
avl.insert(3)
avl.insert(2)

console.log(avl.getBalancedFactor(5))
console.log(avl)
