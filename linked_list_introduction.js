 class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
 }

 class LinkedList{
    constructor(){
        this.head=null
    }

    append(data){
        let newNode=new Node(data);
        if(this.head===null
        ){
            this.head=newNode;
        }else{
            let current=this.head;
            while(current.next!==null){
                current=current.next
            }
            current.next=newNode;
        }
    }

    display(){
        let current=this.head;
        let list=[]
        while(current!==null){
           list.push(current.data);
           current=current.next
        }
        console.log(list.join('->'))
        return
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        while(current!==null){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }

    isCycle(){
       let slow=this.head;
       let fast=this.head;

       while(slow!==null && fast!==null){
        slow=slow.next;
        fast=fast.next.next;


        if(slow===fast){
            return true
        }
        return false;
       }}
 }


 let lnkedlist=new LinkedList();

lnkedlist.append(1);
lnkedlist.append(2);
lnkedlist.append(3);
lnkedlist.append(4);
console.log(lnkedlist.isCycle())