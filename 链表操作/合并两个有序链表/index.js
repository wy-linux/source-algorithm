function ListNode(val) {
    this.val =  val
    this.next = null
}

const list1 = new ListNode(1);
list1.next = new ListNode(5);
list1.next.next = new ListNode(10);

const list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(8);

//递归
function mergeTwoLists(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    }
}

//循环
function mergeTwoLists(l1, l2) {
    const prehead = new ListNode(-1);
    let prev = prehead;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;
    return prehead.next;
}

console.dir(mergeTwoLists(list1, list2), { depth: null })