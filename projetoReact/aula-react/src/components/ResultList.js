import React from "react";

const results = ["Resultado 1" , "Resultado 2", "Resultado 3", "Resultado 4"];

const ResultList = () => {
    <div style={{gridRow: 2, gridColumn: 2}}>
        {results.map((result) => (
            <div style={{marginBottom: '15px'}}>
                <span style={{fontSize: '12pt', color: 'darkgray'}}>url</span>
                <h1 style={{margin: 0, fontSize: '16pt', color: 'darkblue'}}>{result}</h1>
                <p style={{margin: 0}}>
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.
                </p>
            </div>
        ))}
    </div>
};

export default ResultList;