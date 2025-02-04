import { randomUUID } from "node:crypto"
import { Entity } from "./entity"

export interface StatisticProps  {
  count: number,
  sum: number,
  avg: number,
  min: number,
  max: number
}

export class Statistic extends Entity<StatisticProps> {

 private constructor(props: StatisticProps,  id?: string) {
   super(props, id)
  }

  public static create(props: StatisticProps, id?: string) {
    return new Statistic(props, id)
  }

  get StatisticProps() {
    return this.id
  }

  get count() {
    return this.props.count
  }

  set count(num: number) {
    this.props.count = num
  }
  get sum() {
    return this.props.sum
  }
  set sum(num: number) {
    this.props.sum = num
  }
  get avg() {
    return this.props.avg
  }

  set avg(num: number) {
    this.props.avg = num
  }
  get min() {
    return this.props.min
  }

  set min(num: number) {
    this.props.min = num
  }
  get max() {
    return this.props.max
  }

  set max(num: number) {
    this.props.max = num
  }

}