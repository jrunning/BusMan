"use strict";

function BusMan(trips, beginTrips) {
  this.trips      = trips;
  this.beginTrips = beginTrips;

  var self = this;

  $('select').live('change', function(e) {
    self.addSelect($(e.target));
  });

  $('body').append(this.makeSelect(this.beginTrips));
}

BusMan.prototype.addSelect = function($select) {
  var lastSelect, prevId;

  // remove all selects after the one that was changed
  while((lastSelect = $('select').last())[0] != $select[0]) {
    prevId = lastSelect.val(); // save this so we can select it again
    lastSelect.remove();
  }

  if($select.val() != "") {
    connections = this.trips[$select.val()].connections

    if($.isArray(connections) && connections.length > 0) {
      $select.after(this.makeSelect(connections, prevId));
    }
  }
};

BusMan.prototype.makeSelect = function(ids, prevId) {
  var self = this
  ,   select = $('<select><option value="">Choose one</option></select>');

  $.each(ids, function(idx, id) {
    select.append(
      self.makeOption(self.trips[id], id, id == prevId)
    );
  });

  return select;
};

BusMan.prototype.makeOption = function(trip, id, selected) {
  return $('<option/>',
      { text      : trip.departsAt + ' - ' + trip.name +
                    ' (' + trip.arrivesAt + ')'
      , value     : id
      , selected  : selected
      }
    );
}
