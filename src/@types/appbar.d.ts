export type AppBarTypes = {
    typeOfAppBar: "userAppBar" | "DefaultAppBar"
  }

export type AppBarProps = {
    appBarShow: boolean,

} & AppBarTypes