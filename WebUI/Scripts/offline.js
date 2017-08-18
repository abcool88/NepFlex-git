// page loaded
jQuery(document).ready(function ($) {

  // form data saving
  $("#mainform").submit(lib.Save);

  // online/offline event handler
  if (window.sessionStorage) {
    lib.Net.ChangeStatus();
    $(window).bind('online offline', lib.Net.ChangeStatus);
  }
});

// online/offline
var lib = lib || {};

lib.Net = function () {

  var online = true;

  // is browser online?
  function Online() {
    return navigator.onLine;
  }

  // online/offline event
  function ChangeStatus() {
    if (online != Online()) {
      online = Online();
      var s = $("#status");
      s.text(online ? "Online" : "Offline");
      if (online) s.removeClass("offline");
      else s.addClass("offline");
    }
  }

  return {
    Online: Online,
    ChangeStatus: ChangeStatus
  };

}();


//1. initialization

var localDB = null;

function onInit() {
  try {
    if (!window.openDatabase) {
      updateStatus("Error: DB not supported");
    } else {
      initDB();
      createTables();
      queryAndUpdateOverview();
    }
  } catch (e) {
    if (e == 2) {
      updateStatus("Error: Invalid database version.");
    } else {
      updateStatus("Error: Unknown error " + e + ".");
    }
    return;
  }
}

function initDB() {
  var shortmodel = 'localDatabase';
  var version = '1.0';
  var displaymodel = 'MyLocalDatabase';
  var maxSize = 65536; // in bytes
  localDB = window.openDatabase(shortmodel, version, displaymodel, maxSize);
}

function createTables() {
  // var query = 'CREATE TABLE IF NOT EXISTS OfflineAppraisalls(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, make VARCHAR NOT NULL, model VARCHAR NOT NULL);';
  var query = 'CREATE TABLE IF NOT EXISTS OfflineAppraisalls( \
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\
	make varchar(50) NULL,\
	model varchar(50) NULL,\
	Year datetime NULL,\
	Image nvarchar(50) NULL,\
	Active bit NULL,\
	DateInserted datetime NULL,\
	Remarks nvarchar(150) NULL\
);';
  try {
    localDB.transaction(function (transaction) {
      transaction.executeSql(query, [], nullDataHandler, errorHandler);
      updateStatus("Table 'OfflineAppraisalls' is present");
    });
  } catch (e) {
    updateStatus("Error: Unable to create table 'OfflineAppraisalls' " + e + ".");
    return;
  }
}

function onUpdate() {
  var id = document.itemForm.id.value;
  var make = document.itemForm.make.value;
  var model = document.itemForm.model.value;
  if (make == "" || model == "") {
    updateStatus("'make' and 'model' are required fields!");
  } else {
    var query = "update OfflineAppraisalls set make=?, model=? where ID=?;";
    try {
      localDB.transaction(function (transaction) {
        transaction.executeSql(query, [make, model, id], function (transaction, results) {
          if (!results.rowsAffected) {
            updateStatus("Error: No rows affected");
          } else {
            updateForm("", "", "");
            updateStatus("Updated rows:" + results.rowsAffected);
            queryAndUpdateOverview();
          }
        }, errorHandler);
      });
    } catch (e) {
      updateStatus("Error: Unable to perform an UPDATE " + e + ".");
    }
  }
}

function onDelete() {
    debugger;
  var id = document.itemForm.id.value;

  var query = "delete from OfflineAppraisalls where id=?;";
  try {
    localDB.transaction(function (transaction) {

      transaction.executeSql(query, [id], function (transaction, results) {
        if (!results.rowsAffected) {
          updateStatus("Error: No rows affected.");
        } else {
          updateForm("", "", "");
          updateStatus("Deleted rows:" + results.rowsAffected);
          queryAndUpdateOverview();
        }
      }, errorHandler);
    });
  } catch (e) {
    updateStatus("Error: Unable to perform an DELETE " + e + ".");
  }

}

function onCreate() {
  var make = document.itemForm.make.value;
  var model = document.itemForm.model.value;
  if (make == "" || model == "") {
    updateStatus("Error: 'make' and 'model' are required fields!");
  } else {
    var query = "insert into OfflineAppraisalls (make, model) VALUES (?, ?);";
    try {
      localDB.transaction(function (transaction) {
        transaction.executeSql(query, [make, model], function (transaction, results) {
          if (!results.rowsAffected) {
            updateStatus("Error: No rows affected.");
          } else {
            updateForm("", "", "");
            updateStatus("Inserted row with id " + results.insertId);
            queryAndUpdateOverview();
          }
        }, errorHandler);
      });
    } catch (e) {
      updateStatus("Error: Unable to perform an INSERT " + e + ".");
    }
  }
}

function onSelect(htmlLIElement) {
  var id = htmlLIElement.getAttribute("id");

  query = "SELECT * FROM OfflineAppraisalls where id=?";
  try {
    localDB.transaction(function (transaction) {

      transaction.executeSql(query, [id], function (transaction, results) {

        var row = results.rows.item(0);

        updateForm(row['ID'], row['make'], row['model']);

      }, function (transaction, error) {
        updateStatus("Error: " + error.code + "<br>Message: " + error.message);
      });
    });
  } catch (e) {
    updateStatus("Error: Unable to select data from the db " + e + ".");
  }

}

function queryAndUpdateOverview() {
  //remove old table rows
  var dataRows = document.getElementById("itemData");

  while (dataRows.length > 0) {
    row = dataRows[0];
    document.getElementById("itemData").removeChild(row);
  };

  //read db data and create new table rows
  var query = "SELECT * FROM OfflineAppraisalls;";
  try {
    localDB.transaction(function (transaction) {
      transaction.executeSql(query, [], function (transaction, results) {
        for (var i = 0; i < results.rows.length; i++) {

          var row = results.rows.item(i);
          var li = document.createElement("li");
          li.setAttribute("id", row['ID']);
          li.setAttribute("class", "data");
          li.setAttribute("onclick", "onSelect(this)");

          var liText = document.createTextNode(row['make'] + " x " + row['model']);
          li.appendChild(liText);

          document.getElementById("itemData").appendChild(li);
        }
      }, function (transaction, error) {
        updateStatus("Error: " + error.code + "<br>Message: " + error.message);
      });
    });
  } catch (e) {
    updateStatus("Error: Unable to select data from the db " + e + ".");
  }
}

// 3. misc utility functions

// db data handler

errorHandler = function (transaction, error) {
  updateStatus("Error: " + error.message);
  return true;
}

nullDataHandler = function (transaction, results) {}

// update view functions

function updateForm(id, make, model) {
  debugger;
  document.itemForm.id.value = id;
  document.itemForm.make.value = make;
  document.itemForm.model.value = model;
}

function updateStatus(status) {
  document.getElementById('status').innerHTML = status;
}
