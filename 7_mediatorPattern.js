// Mediator Pattern
// Allows one to define a mediator object that encapsulates and controls
//   how a gorup of objects interact with eachother.

// ChatRoom example:
// Instead of talking directly to other members, we have ChatRoom as a mediator
//   to receive members' message and it takes cares of the routing logic and
//   let other members know when messages are coming their way.

function Member(name) {
  this.name = name;
  this.chatRoom = null;
}

Member.prototype = {
  // Send a message to another chatroom member
  send(to, message) {
    console.log(
      `${new Date().toUTCString()} - ${this.name} sent to ${
        to.name
      }: ${message}`
    );
    this.chatRoom.transmit(message, this, to);
  },
  // Receive a message from another chatroom member
  receive(from, message) {
    console.log(
      `${new Date().toUTCString()} - ${this.name} received from ${
        from.name
      }: ${message}`
    );
  },
};

// The `Mediator` between members
function ChatRoom() {
  this.members = {};
}

ChatRoom.prototype = {
  // Add memebrs to a chatroom
  addMember(member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  },
  // Transmit messages between members
  transmit(message, from, to) {
    this.members[to.name].receive(from, message);
  },
};

const denny = new Member("Denny");
const sharon = new Member("Sharon");
const trump = new Member("Trump");

const chatRoom = new ChatRoom();
chatRoom.addMember(denny);
chatRoom.addMember(sharon);
chatRoom.addMember(trump);

denny.send(sharon, "Hello, there!");
denny.send(trump, "Meh...");
/*
Fri, 30 Oct 2020 21:08:24 GMT - Denny sent to Sharon: Hello, there!
Fri, 30 Oct 2020 21:08:24 GMT - Sharon received from Denny: Hello, there!
Fri, 30 Oct 2020 21:08:24 GMT - Denny sent to Trump: Meh...
Fri, 30 Oct 2020 21:08:24 GMT - Trump received from Denny: Meh...
*/
