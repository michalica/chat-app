import MessageStructure from "../../models/Message";

export default class MessageBuilder {
  private message: string = "my message";
  private author: string = "John";
  private timestamp: number = 1627697201344;

  public static create(): MessageBuilder {
    return new MessageBuilder();
  }

  public static forAuthor(author: string): MessageBuilder {
    return new MessageBuilder().withAuthor(author);
  }

  public withMessage(message: string): MessageBuilder {
    this.message = message;

    return this;
  }

  public withAuthor(author: string): MessageBuilder {
    this.author = author;

    return this;
  }

  public withTimeStamp(timestamp: number): MessageBuilder {
    this.timestamp = timestamp;

    return this;
  }

  public build(): MessageStructure {
    return {
      message: this.message,
      author: this.author,
      timestamp: this.timestamp,
    };
  }
}
