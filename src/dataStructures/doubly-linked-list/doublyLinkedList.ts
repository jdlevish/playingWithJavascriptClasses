// the difference between doubly and singly linked lists is that doubly linked lists have their nodes connected through pointers with both the previous and the next value. On the other hand, singly linked lists only connect their nodes with the next value.

import { EnumNumberMember } from "@babel/types";

// This double pointer approach allows doubly linked lists to perform better with certain methods compared to singly linked lists, but at a cost of consuming more memory (with doubly linked lists we need to store two pointers instead of one).

class node {
    val: any;
    next: object | null;
    prev: object | null;

    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.prev = null;

    }
}

class DoublyLinkedList {
    head: object | null;
    tail: object | null;
    length: number;
    val: any;


    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any) {
        const newNode = new node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            newNode.prev = this.tail;
            this.tail.next = newNode;

        }
        this.length++
        return this

    }

    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--
        return poppedNode;
    }
    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;

        }
        this.length--
        return oldHead;

    }
    unShift(val: any) {
        const newNode = new node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(index: number) {
        if (index < 0 || index >= this.length) return null;
        let count, current
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--
            }
        }
        return current;
    }
    set(index: number, val: any) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true
        }
        return false;
    }
    insert(index: number, val: any) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unShift(val);
        if (this.length) return !!this.push(val);

        var newNode = new node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++
        return true;
    }
}