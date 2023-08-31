"use client"
import BackButton from '@/components/BackButton/BackButton'
import Form from '@/components/Form/Form'
import Input from '@/components/Input/Input'
import InputSubmit from '@/components/InputSubmit/InputSubmit'
import Title from '@/components/Title/Title'
import { TMedicamentoPost } from '@/types'
import { useForm, SubmitHandler } from "react-hook-form"
import { postData } from '../api/routes'
import axios from 'axios'
import Image from 'next/image'



type FormData = {
  nome: string;
  preco: number | string;
  data_de_validade: string;
  imagem: FileList;
};

const CadastrarMedicamento = ({ nome, preco, data_de_validade, imagem }: TMedicamentoPost) => {
  const {
    register,
    handleSubmit,
    watch
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      nome: nome,
      preco: preco,
      data_de_validade: data_de_validade,
      imagem: imagem
    }

  })
  const onSubmit: SubmitHandler<TMedicamentoPost> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('nome', data.nome);
      formData.append('preco', data.preco.toString());
      formData.append('data_de_validade', data.data_de_validade);
      formData.append('imagem', data.imagem[0]);
      console.log(data.imagem[0].name)

      await axios.post('http://localhost:8000/api/medicamentos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Medicamento cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o medicamento:', error);
    }

    console.log('salvou', data)
  }

  return (
    <div className='flex justify-center py-8 h-screen '>

      <form className='w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
        <Title text='Adicionar novo medicamento' />
        <div className="flex flex-wrap -mx-3  py-6">
          <div className="w-full md:w-1/2 px-3 md:mb-0 ">
            <label className='text-gray-500'>Nome do medicamento</label>
            <Input {...register("nome")} name="nome" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className='text-gray-500'>Preço</label>
            <Input {...register("preco")} name="preco" />

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className='text-gray-500'>Validade</label>
            <Input {...register("data_de_validade")} type='data' name="data_de_validade" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 md:mb-0">
            {/* <label>Upload de imagem</label>
            <Input {...register("imagem")} type='file' name="imagem" /> */}
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload de imagem</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" {...register("imagem")} />
              </label>
            </div>


          </div>
        </div>
        {watch('imagem') && (
          <Image
            src={URL.createObjectURL(watch('imagem')[0])}
            alt="Imagem selecionada"
            width={200}
            height={200}
            layout='fill'
          />
        )}

        <div className='w-full  mt-6 flex justify-between'>
          <BackButton />
          <InputSubmit />
        </div>
      </form>
    </div>
  )
}

export default CadastrarMedicamento