new Vue({
    el: "#app",
    data: {
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false,
        logs:[]

    },
    methods: {
        start_game: function () {
            this.game_is_on = true;
        },
        attack: function () {
            var point= Math.ceil(Math.random()*10);
            this.monster_heal=this.monster_heal-point;
            this.add_to_log({turn:"P",text:"Oyuncu atağı ("+point+")"})
            this.monster_attack();


        },
        special_attack: function () {
            var point= Math.ceil(Math.random()*25);
            this.monster_heal-=point;
            this.add_to_log({turn:"P",text:"Özel Oyuncu atağı ("+point+")"})
            this.monster_attack();

        },
        heal_up: function () {
            var point= Math.ceil(Math.random()*10);
            this.player_heal+=point;
            this.add_to_log({turn:"P",text:"İlk yardım ("+point+")"})
            this.monster_attack();

        },
        give_up: function () {
            this.player_heal=0;
            this.add_to_log({turn:"P",text:"Oyuncu pes etti"})
            console.log("M:" +this.monster_heal);
            console.log("P:" +this.player_heal)
        },
        monster_attack:function (){
            var point= Math.ceil(Math.random()*15);
            this.player_heal=this.player_heal-point;
            this.add_to_log({turn:"M",text:"Monster atağı ("+point+")"})
            console.log("M:" +this.monster_heal);
            console.log("P:" +this.player_heal)
        },
        add_to_log:function (log){
            this.logs.push(log);
        }
    },
    watch:{
        //değişken değeri değiştiğinde izlemmeizi sağlayan
        player_heal: function (value) {
            if(value<=0){
                this.player_heal=0;
                if(confirm("Game over . Again play with me?")){
                    this.player_heal=100;
                    this.monster_heal=100;
                    this.logs=[];

                }else{

                }
            }else if(value>=100){
                this.player_heal=100;
            }
        },
        monster_heal: function (value) {
            if(value<=0){
                this.monster_heal=0;
                if(confirm("You won the game . Again play with me?")){
                    this.player_heal=100;
                    this.monster_heal=100;
                    this.logs=[];

                }else{

                }
            }else if(value>=100){
                this.monster_heal=100;
            }
        }
    },
    computed:{
        userProgress:function (){
            return{
                width:this.player_heal+"%"
            }
        },
       monsterProgress:function (){
            return{
                width:this.monster_heal+"%"
            }
        }
    }
})