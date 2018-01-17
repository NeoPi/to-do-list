
var TO_DO_LIST_DATA = "todo_list_data" ;

export default {
  fetch:function () {
      return JSON.parse(window.localStorage.getItem(TO_DO_LIST_DATA) || '[]') ;
  },
  sava: function(todoItems) {
      window.localStorage.setItem(TO_DO_LIST_DATA,JSON.stringify(todoItems)) ;
  }
}
