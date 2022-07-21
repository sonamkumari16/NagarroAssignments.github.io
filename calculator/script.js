function insert(n) {
    $(".screen").val($(".screen").val() + n);
  }
  
  function equal() {
    $(".screen").val(eval($(".screen").val()));
  }
  
  function clean() {
    $(".screen").val("");
  }
  function back() {
    let value = $(".screen").val();
    $(".screen").val(value.substring(0, value.length - 1));
  }