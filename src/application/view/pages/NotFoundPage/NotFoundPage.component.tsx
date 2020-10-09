import React, { FC } from "react"

export interface INotFoundPageOwnProps {}
export interface INotFoundPageInjectedProps {}
export interface INotFoundPageProps extends INotFoundPageOwnProps, INotFoundPageInjectedProps {}

const NotFoundPage: FC<INotFoundPageProps> = () => {
  return (
    <div>
      Not Found
    </div>
  )
}

export default NotFoundPage;
