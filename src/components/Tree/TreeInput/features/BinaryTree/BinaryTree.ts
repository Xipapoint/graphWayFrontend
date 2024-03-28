class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;
    xPos: number;
    yPos: number
    parentNode: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parentNode = null;
        this.xPos = 0
        this.yPos = 0
    }
    
    setXPos(xPos: number){
        this.xPos = xPos
    }

    setYPos(yPos: number){
        this.yPos = yPos
    }
}

export class BinaryTree {
    root: TreeNode | null;
    lastAddedNode: TreeNode | null;

    constructor() {
        this.root = null;
        this.lastAddedNode = null
    }

    insert(data: number, xPos: number, yPos: number): void {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
            this.root.xPos = xPos
            this.root.yPos = yPos
            this.lastAddedNode = newNode
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.data < node.data) {
            if (node.left === null) {
                newNode.setXPos(node.xPos - 70)
                newNode.setXPos(node.yPos + 50)
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                newNode.setXPos(node.xPos + 70)
                newNode.setXPos(node.yPos + 50)
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // inorder (левый, корень, правый)
    inorder(node: TreeNode | null = this.root): void {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // preorder (корень, левый, правый)
    preorder(node: TreeNode | null = this.root): void {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // postorder (левый, правый, корень)
    postorder(node: TreeNode | null = this.root): void {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    search(node: TreeNode | null, data: number): TreeNode | null {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }

    remove(data: number): void {
        this.root = this.removeNode(this.root, data);
    }

    private removeNode(node: TreeNode | null, key: number): TreeNode | null {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const aux = this.findMinNode(node.right)!;
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node: TreeNode): TreeNode {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    getRootNode(): TreeNode | null {
        return this.root;
    }
}