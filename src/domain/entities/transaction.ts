import { Entity } from './entity'

export interface TransactionProps {
  value: number
  dateTime: string
}

export class Transaction extends Entity<TransactionProps> {
  private constructor(props: TransactionProps, id?: string) {
    super(props, id)
  }

  public static create(props: TransactionProps, id?: string): Transaction {
    return new Transaction(props, id)
  }

  get value() {
    return this.props.value
  }

  set value(num: number) {
    this.props.value = num
  }

  get dateTime() {
    return this.props.dateTime
  }

  set dateTime(date: string) {
    this.props.dateTime = date
  }
}
