class TreeNode {
    data: number;
    parent: TreeNode | null;
    left: TreeNode | null;
    right: TreeNode | null;
    xPos: number;
    yPos: number
    parentNode: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.parent = null
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

    insert(data: number, xPos: number, yPos: number, borderX: number): void {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            console.log("root is null");
            this.root = newNode;
            this.root.xPos = xPos
            this.root.yPos = yPos
            this.lastAddedNode = newNode
        } else {
            this.insertNode(this.root, newNode, borderX);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode, borderX: number): void {
        console.log("borderx:", borderX);
        
        if (newNode.data < node.data) {
            if (node.left === null) {
                let x = node.xPos - 70
                let y = node.yPos + 50
                if(node.xPos > borderX){
                    if(x - 15 <= borderX){
                        x +=70
                        if(this.root){
                            this.updateSubtreeCoords(this.root, true)
                        }
                    }
                }
                newNode.xPos = x
                newNode.yPos = y
                newNode.parent = node
                node.left = newNode;
                this.lastAddedNode = newNode
            } else {
                this.insertNode(node.left, newNode, borderX);
            }
        } else {
            if (node.right === null) {
                let x = node.xPos + 70
                let y = node.yPos + 50
                console.log("node is bigger");
                if(node.xPos < borderX){
                    if(x + 15 >= borderX){
                        console.log("Вышло за грань");
                        x -=70
                        if(this.root){
                            this.updateSubtreeCoords(this.root, false)
                        }
                    }
                }
                newNode.xPos = x
                newNode.yPos = y
                newNode.parent = node
                node.right = newNode;
                this.lastAddedNode = newNode
            } else {
                this.insertNode(node.right, newNode, borderX);
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

    private findMinNode(node: TreeNode): TreeNode {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    getRootNode(): TreeNode | null {
        return this.root;
    }

    searchParent(node: TreeNode): number | null{
        if(node.parent){
            return node.parent.data
        }
        return null
    }

    private updateSubtreeCoords(node: TreeNode, isLeft: boolean): void{
        if(node === this.root){
            if(node.left) this.updateSubtreeCoords(node.left, isLeft)
            return
        }
        if(isLeft) node.xPos += 70;
        else node.xPos -=70
        if(node.left) this.updateSubtreeCoords(node.left, isLeft)
        if(node.right) this.updateSubtreeCoords(node.right, isLeft)
    }
}