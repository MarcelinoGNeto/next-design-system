import React from "react";
import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";

function useForm({initialValues}) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(evento) {
      const { name, value } = evento.target;
      setValues({
        ...values,
        [name]: value,
      })
    }
  };
}

export default function NewsletterScreen() {
  const form = useForm({
    initialValues: {
      emailNewsletter: "",
    }
  });
  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          console.log(`Email enviado: ${form.values.emailNewsletter}`)

          //validação
          if(!form.values.emailNewsletter.includes("@")) {
            alert("Informe um email válido!")
            return;
          }
          alert("Você foi cadastrado com sucesso!")

          //Enviar para banco de dados

        }}
      >
        <Box
          styleSheet={{
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px',
            padding: '16px',
          }}
        >
          <Image 
            src="https://github.com/MarcelinoGNeto.png" 
            alt="imagem de perfil do Marcelino" 
            styleSheet={{
              borderRadius: '100%',
              width: '100px',
              marginBottom: '16px',
            }}  
          />
          <Text variant="heading3">
            Newsletter MGN Tech
          </Text>
          <NewsletterTextField
            placeholder="Informe seu email"
            name="emailNewsletter"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Button
            fullWidth styleSheet={{ marginTop: '16px' }}
          >
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
  return (
    <Box
      styleSheet={{
        maxWidth: '300px',
        width: '100%',
      }}
    >
      <BaseComponent 
        as="input"
        {...props}
        styleSheet={{
          border: '1px solid rgb(195, 195, 195)',
          borderRadius: '4px',
          padding: '8px',
          width: '100p%'
        }}
      />
    </Box>
  )
}
