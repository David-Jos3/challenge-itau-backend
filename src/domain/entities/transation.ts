import { randomUUID } from "node:crypto"
import { Entity } from "./entity"

export interface  TransationProps {
  value: number
  dateTime: string
}

export class Transation extends Entity<TransationProps> {
  private constructor( props: TransationProps, id?: string) {
    super(props, id)
  }
  public static create(props: TransationProps, id?: string): Transation {
   return new Transation(props, id)
  } 

  get transationId() {
    return this.id
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
    this.props.dateTime= date
  }

}