/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function () {
    this.val = null;
    this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let temporary = this;
    while (index !== 0) {
        temporary = this.next;
        index--;
    }
    console.log(temporary.val, temporary.next);
    return temporary.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const nx = this;
    this.next = nx;
    this.val = val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let list = this;
    while (list.next) {
        console.log(list);
        list = list.next;
    }
    list.next = new MyLinkedList(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let positions = this;
    let i = 0;
    while (i !== index) {
        positions = this.next;
    }
    const tail = positions;
    positions.next = tail;
    positions.val = index;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    let positions = this;
    let i = 0;
    while (i !== index) {
        positions = this.next;
    }
    positions = positions.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
