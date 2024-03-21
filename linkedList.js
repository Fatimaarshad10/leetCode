// we can move left to right 
// First node is called head 
// last node is called tail 
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode

    }
    addLast(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    size() {
        let current = this.head
        let length = 0
        while (current.next) {
            length++
            current = current.next
        }
        return length
    }
    addAt(index, data) {
        if (index < 0 ||index > this.size()) {
            console.log("Invalid Index")
            return
        }
        const newNode = new Node(data)
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode

    }
    removeTop(){
        if(!this.head){
            return 
        }
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){
            return 
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    removeAt(index){
        if (index < 0 || index > this.size()) {
            console.log("Invalid Index")
            return
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }

    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.addFirst(3)
linkedList.addFirst(5)
linkedList.addFirst(2)
linkedList.addFirst(4)

linkedList.removeTop()
linkedList.addAt(2,8)
linkedList.print()
console.log("size = " + linkedList.size())
