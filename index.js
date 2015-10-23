module.exports = function (tableData) {
  if (!Array.isArray(tableData) || !Array.isArray(tableData[0])) {
    return 'How dare you not pass be table data. I hope this ruins your object';
  }

  tableData = tableData.map(function (row) {
    return row.map(function (cell) {
      return cell;
    });
  });

  return tableData;
};