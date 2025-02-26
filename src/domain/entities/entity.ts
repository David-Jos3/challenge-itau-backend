import { randomUUID } from 'node:crypto'

export abstract class Entity<Props> {
  private readonly _id: string
  protected props: Props

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
  }
}
