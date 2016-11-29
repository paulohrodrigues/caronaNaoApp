import {Passageiro} from "../controller/passageiro";
import {Component} from '@angular/core';
import {StatusBar, SQLite} from 'ionic-native';
import {Platform} from 'ionic-angular';

export class DAOPassageiro{

	public db:SQLite;
    public listaDePassageiros;


	constructor() {
        this.listaDePassageiros={rows:{length:0}};
        this.db = new SQLite();
    }

    add(dados){

        this.db.openDatabase({name: "data.db", location: "default"}).then(() => {
            
            this.db.executeSql("insert into passageiro(nome,celular,divida) values (?,?,?)",[dados.nome,dados.celular,dados.divida]).then((data) => {
                console.log("salvo");
            }, (error) => {
                console.log("ERROR: " + JSON.stringify(error));
            });


        }, (error) => {
            console.log("ERROR: ", error);
        });


    }


    atualiza(stringCondicao,arrayCondicao){

        var self=this;
        this.db.openDatabase({name: "data.db", location: "default"}).then(() => {
            
            this.db.executeSql("UPDATE passageiro SET divida='0' WHERE "+stringCondicao,arrayCondicao).then((data)=>{
                
                self.busca("divida>?",[0]);
                console.log("Sucesse!");

            }, (error) => {

                console.log("ERROR: " + JSON.stringify(error));
            
            });

        }, (error) => {
        
            console.log("ERROR: ", error);
        
        });


    }



	busca(condicaoString,condicaoArray):any{

        
        var self=this;
        this.db.openDatabase({name: "data.db", location: "default"}).then(() => {
            
            this.db.executeSql("SELECT * FROM passageiro where "+condicaoString, condicaoArray).then((data)=>{
                
                self.listaDePassageiros=data;    
                return data;

            }, (error) => {
                console.log("ERROR: " + JSON.stringify(error));
            });


        }, (error) => {
            console.log("ERROR: ", error);
        });

        //setTimeout(()=>{
            return this.listaDePassageiros;
        //},400);

        
        
	}
}