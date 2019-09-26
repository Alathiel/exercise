var app = angular.module('app',[]);

app.controller('appCtrl',function($scope)
{
    //creo i due array per le righe
    $scope.items = [{sign:'',number:''}];
    $scope.buttons=["Disable"];
    
    $scope.result = 0;
    
    //aggiunge una riga
    $scope.addRow = function(){

        //creo l'oggetto row che verrà aggiunto all'array
        var row={
            sign:'',
            number:0
        }

        //creo l'oggetto button che verrà aggiunto all'array
        var button="Disable";
        
        //aggiungo la riga all'array
        $scope.items.push(row);
        $scope.buttons.push(button);
    };

    //rimuove una riga
    $scope.removeRow=function(index)
    {
        //rimuove la riga dall'indice da cui viene richiamato (porto l'indice quando richiamo la funzione), il secondo argomento indica quante righe vengono eliminate
        $scope.items.splice(index,1);
        $scope.buttons.splice(index,1);
        $scope.sum();
    }

    //disabilita una riga
    $scope.disableRow=function(index)
    {
        //utilizzo l'indice a cui viene richiamato (la riga in cui viene premuto il bottone) per cambiare la scritta
        if($scope.buttons[index]=="Enable")
        $scope.buttons[index] = "Disable";
        else
        $scope.buttons[index] = "Enable";
        

        $scope.sum(); //ricalcolo la somma
    }

    //effettua la somma di tutti i valori inseriti
    $scope.sum=function()
    {
        $scope.result=0;
        for(var i=0;i<$scope.items.length;i++)
        {
            if($scope.items[i].sign=='+' && $scope.buttons[i]=="Disable")
            $scope.result+=$scope.items[i].number;
            else if($scope.items[i].sign=='-' && $scope.buttons[i]=="Disable")
            $scope.result-=$scope.items[i].number;
            
        }
    }
        
});