 //preencher virgula  
        //funcão operaçao
        //função resultado
        var operacao;
        var primeiroValor = 0;
        var segundoValor = 0;
            function prencherValor(valor){
                var valorAtual  = $("#visor").val();
                if(valorAtual=="0"){
                    $("#visor").val(valor);
                }
                else{
                    if (primeiroValor != 0 ){
                        if (segundoValor == 0 ){
                            valorAtual = "";
                            segundoValor = valor;
                        }
                        else{
                             segundoValor += "" + valor;
                        }
                    } 
                    $("#visor").val(valorAtual+valor);
                }
            }
            function resultado (){
                var res = 0;
                switch (operacao){
                    case "*":
                        res = primeiroValor * segundoValor;
                    break;

                    case "-":
                    res = primeiroValor - segundoValor;
                    break;

                    case "+":
                    res = 1* primeiroValor + segundoValor;
                    break;

                    case "/":
                    res = primeiroValor / segundoValor;
                    break;
                }
                ACapaga();
                $("#visor").val(res);
            } 

            function ACapaga(){
                document.getElementById("visor").value = "0";
                primeiroValor = 0;
                segundoValor = 0;
            }


            function inverter(){
                var valorAtual = $("#visor").val();
                $("#visor").val(valorAtual*-1);
            
            }


            function esponemciacao(){
               var valorAtual = $("#visor").val();
               $("#visor").val(valorAtual*valorAtual);
            }
            
           
            function digitaroperacao(op)
            {
                if (segundoValor != 0){
                    resultado();
                }
                
                if  (primeiroValor==0){
                   var valorAtual = $("#visor").val();
                   if (valorAtual!="0"){
                       primeiroValor=valorAtual;
                       operacao = op;
                       $("#visor").val (primeiroValor+" "+op);
                   }
                }
            
                 
            }