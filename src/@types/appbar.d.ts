export type AppBarTypes = {
    typeOfAppBar: "userAppBar" | "defaultAppBar"
  }

export type AppBarProps = {
    appBarShow: boolean,

} & AppBarTypes