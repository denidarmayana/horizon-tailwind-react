const usersData = 
    {
      id: 1,
      name: "Root User",
      username: "root",
      position: "Kiri",
      upline: "null",
      count_left: 0,
      count_right: 0,
      lates : false,
      downline:[
        {
            id: 1,
            name: "Suparman",
            username: "suparman01",
            position: "Kiri",
            upline: "root",
            count_left: 0,
            count_right: 0,
            lates : false,
            downline:[]
        },
        {
            id: 1,
            name: "Suparman",
            username: "suparman01",
            position: "Kiri",
            upline: "root",
            count_left: 0,
            count_right: 0,
            lates : false,
            downline:[
                {
                    id: 1,
                    name: "Suparman",
                    username: "suparman01",
                    position: "Kiri",
                    upline: "root",
                    count_left: 0,
                    count_right: 0,
                    lates : true,
                },
                {
                    id: 1,
                    name: "Suparman",
                    username: "suparman01",
                    position: "Kiri",
                    upline: "root",
                    count_left: 0,
                    count_right: 0,
                    lates : true,
                },
              ]
        },
      ]
    }
  export default usersData;