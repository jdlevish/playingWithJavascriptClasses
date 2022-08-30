class ListNode<T> {
    data: any;
    next: ListNode<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null
    }
}
class LinkedList<T> {

    next: object | null;
    head: ListNode<T> | null;
    size: number;


    constructor(head = null,) {

        this.head = head
        this.size = 0
        this.next = null;
    }
    push: Function = (value: T) => {
        const newNode = new ListNode<T>(value);
        if (!this.head) {
            this.head = newNode;
        }

    }
    pop: Function = () => {
        if (!this.head) {
            return false;
        }
        if (this.size === 1) {
            this.head = null;
            this.size--;
            return true;
        }
        let current = this.head;
        let prevNode = null;

        while (current.next) {
            prevNode = current;
            current = current.next;
        }

        prevNode.next = null;

        this.size--;
        return true;
    }


}
export { LinkedList, ListNode }