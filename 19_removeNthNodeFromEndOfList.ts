/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || head.next === null) {
        return null
    }
    const values = [head.val]
    let current = head
    let next: ListNode | null = head.next
    while (next !== null) {
        values.push(next.val)
        current = next
        next = next.next
    }
    values.splice(-n, 1)
    let lastNode: ListNode | null = null
    while (values.length > 0) {
        let node = new ListNode(values.pop(), lastNode)
        lastNode = node
    }
    return lastNode
};