function formatDate(_date) {
  return _date.toISOString().split("T")[0];
}

function getRangeDate(index) {
  if (index > 0) {
    index = -1;
  }
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth() + index, 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + index + 1, 0);

  return [formatDate(firstDay), formatDate(lastDay)];
}

export { getRangeDate };
