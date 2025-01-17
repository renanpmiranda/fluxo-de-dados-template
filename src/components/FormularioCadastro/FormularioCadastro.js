import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  function onChangeUrl(event) {
    props.setUrlFoto(event.target.value)
  }

  function onChangeDescricao(event) {
    props.setDescricao(event.target.value)
  }

  function onChangeTitulo(e) {
    props.setTitulo(e.target.value)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" value={props.titulo} onChange={onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.urlFoto} onChange={onChangeUrl}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro