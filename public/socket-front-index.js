import { inserirLinkDocumentos, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos",(documentos)=>{
documentos.forEach((documento)=>{
    inserirLinkDocumentos(documento.nome);
})
});

function emitirAdicionarDocumento(nome){
    socket.emit('adicionar_documento', nome);
}

socket.on("adicionar_documento_interface", (nome)=>{
inserirLinkDocumentos(nome)
});

socket.on("documento_existente", (nome)=>{
    alert(`O documento ${nome} ja existe!`)
});

socket.on("excluir_documento_sucesso", (nome)=>{
removerLinkDocumento(nome);
});

export {emitirAdicionarDocumento};