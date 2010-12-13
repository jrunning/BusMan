var trips =
  { 0 :
    { name        : "Eastside Express"
    , beginStop   : "Court &amp; Peterson"
    , departsAt   : "8:08 AM"
    , endStop     : "Downtown Interchange"
    , arrivesAt   : "8:32 AM"
    , connections : [9,7]
    }
  , 1 :
    { name        : "Rochester"
    , beginStop   : "Amhurst &amp; Washington"
    , departsAt   : "7:56 AM"
    , endStop     : "Downtown Interchange"
    , arrivesAt   : "8:15 AM"
    , connections : [9,7]
    }
  , 2 :
    { name        : "Court Hill"
    , beginStop   : "Court &amp; Friendship"
    , departsAt   : "7:58 AM"
    , endStop     : "Downtown Interchange"
    , arrivesAt   : "8:10 AM"
    , connections : [9,7]
    }
  , 3 :
    { name        : "Court Hill"
    , beginStop   : "Court &amp; Friendship"
    , departsAt   : "8:28 AM"
    , endStop     : "Downtown Interchange"
    , arrivesAt   : "8:40 AM"
    , connections : [9,7]
    }
  , 4 :
    { name        : "Rochester"
    , beginStop   : "Amhurst &amp; Washington"
    , departsAt   : "7:26 AM"
    , endStop     : "Downtown Interchange"
    , arrivesAt   : "7:45 AM"
    , connections : [5]
    }
  , 5 :
    { name        : "Pentacrest"
    , beginStop   : "Schaeffer Hall"
    , departsAt   : "8:10 AM"
    , endStop     : "VA Loop"
    , arrivesAt   : "8:16 AM"
    , connections : [6, 8]
    }
  , 6 :
    { name        : "Research Park"
    , beginStop   : "VA Loop"
    , departsAt   : "8:30 AM"
    , endStop     : "Oakdale Hall"
    , arrivesAt   : "8:55 AM"
    , connections : []
    }
  , 7 :
    { name        : "Pentacrest"
    , beginStop   : "Schaeffer Hall"
    , departsAt   : "8:55 AM"
    , endStop     : "VA Loop"
    , arrivesAt   : "9:01 AM"
    , connections : [8]
    }
  , 8 :
    { name        : "Research Park"
    , beginStop   : "VA Loop"
    , departsAt   : "9:15 AM"
    , endStop     : "Oakdale Hall"
    , arrivesAt   : "9:40 AM"
    , connections : []
    }
  , 9 :
    { name        : "Red Route"
    , beginStop   : "Schaeffer Hall"
    , departsAt   : "8:43 AM"
    , endStop     : "Hardin Library"
    , arrivesAt   : "8:59 AM"
    , connections : [8]
    }
  }

var beginTrips = [4,1,2,0,3];
