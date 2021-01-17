function formatDate(_date) {
  return _date.toISOString().split("T")[0];
}

function getRangeDate(index) {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);

  return [formatDate(firstDay), formatDate(lastDay)];
}

export { getRangeDate };
