// 链表的定义
class ListNode {
    val;
    next = null;
    constructor(value) {
      this.val = value;
      this.next = null;
    }
}

// 反转链表的实现
var reverseList = function(head) {
    let pre=null;
    let cur=null;
    while(head!=null){
        cur=head;
        head=head.next;
        cur.next=pre;
        pre=cur;
    }
    return cur;
};

// 构造一条链表 0 1 2 3 4
let node=new ListNode(0);
let head=node;
for(let i=1;i<5;i++){
    node.next=new ListNode(i);
    node=node.next;
}
// 反转链表
let listNode=reverseList(head);

// 输出
while(listNode!=null){
    console.log(listNode.val);
    listNode=listNode.next;
}

