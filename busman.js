"use strict";

function BusMan(trips, beginTrips) {
  this.trips      = trips;
  this.beginTrips = beginTrips;

  var self = this;

  $('select').live('change', function(e) {
    self.addSelect($(e.target));
  });

  this.addSelect();
}

BusMan.prototype.addSelect = function($select) {
  if($select == undefined && $.isArray(this.beginTrips)) {
    $('body').append(this.makeSelect(this.beginTrips));
  } else {
    var self = this;

    while($('select').last()[0] != $select[0]) {
      $('select').last().remove();
    }

    if($select.val() != "") {
      connections = this.trips[$select.val()].connections

      if($.isArray(connections) && connections.length > 0) {
        $select.after(this.makeSelect(connections));
      }
    }
  }
};

BusMan.prototype.makeSelect = function(ids) {
  var self = this
  ,   select = $('<select><option value="">Choose one</option></select>');

  $.each(ids, function(idx, id) {
    select.append(self.makeOption(self.trips[id], id));
  });

  return select;
};

BusMan.prototype.makeOption = function(trip, idx) {
  return $('<option/>',
      { text  : trip.departsAt + ' - ' +
                trip.name +
                ' (' + trip.arrivesAt + ')'
      , value : idx
      }
    );
}
