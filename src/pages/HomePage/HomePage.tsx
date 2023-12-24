import { Modal } from '../../components/UIkit/Modal';
import { Input } from '../../components/UIkit/Input';
import { Select } from '../../components/UIkit/Select/Select';
import styles from './HomePage.module.scss';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button } from '../../components/UIkit/Button';
import { useEffect, useState } from 'react';
import { SimplePokemonsType, getPokemons } from '../../utils/api';

type TeamType = {
  coach: {
    name: string;
    surname: string;
  };

  pokemons: string[];
} | null;

export const HomePage = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [pokemons, setPokemons] = useState<SimplePokemonsType>([]);
  const [team, setTeam] = useState<TeamType>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemons();
      setPokemons(response?.data?.results);
    };

    fetchData();
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const switchModal = () => setModalIsActive((prev) => !prev);

  const submitHandler = (data: FieldValues) => {
    const { name, surname, pokemons } = data;
    setTeam({ coach: { name, surname }, pokemons });
    reset();
    switchModal();
  };

  return (
    <div className={styles.page}>
      <Button size="xl" onClick={switchModal}>
        Create Team
      </Button>
      {team && (
        <section className={styles.team}>
          <h1>{`${team.coach.name} ${team.coach.surname}`}</h1>
          <ul>
            {team.pokemons.map((p) => (
              <li>- {p}</li>
            ))}
          </ul>
        </section>
      )}
      {modalIsActive && (
        <Modal
          className={styles.modal}
          onCancel={switchModal}
          onSubmit={handleSubmit(submitHandler)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'name is required',
                pattern: { value: /^[A-Z]+$/, message: 'name must contain letters A-Z' },
                minLength: { value: 2, message: 'Min length is 2 symbols' },
                maxLength: { value: 12, message: 'Max length is 12 symbols' },
              }}
              defaultValue=""
              render={({ field }) => (
                <Input
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  label="name"
                  placeholder="name"
                  error={!!errors?.name}
                  helperText={errors?.name?.message?.toString()}
                  required
                />
              )}
            />
            <Controller
              name="surname"
              control={control}
              rules={{
                required: 'surname is required',
                pattern: { value: /^[A-Z]+$/, message: 'surname must contain letters A-Z' },
                minLength: { value: 2, message: 'Min length is 2 symbols' },
                maxLength: { value: 12, message: 'Max length is 12 symbols' },
              }}
              defaultValue=""
              render={({ field }) => (
                <Input
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  label="surname"
                  placeholder="surname"
                  error={!!errors?.surname}
                  helperText={errors?.surname?.message?.toString()}
                  required
                />
              )}
            />
            <Controller
              name="pokemons"
              control={control}
              rules={{
                required: 'choose 4 pokemons',
                validate: {
                  EqualToFour: (v) => {
                    return v.length !== 4 ? 'choose 4 pokemons' : undefined;
                  },
                },
              }}
              defaultValue={[]}
              render={({ field }) => {
                return (
                  <Select
                    label="select"
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    options={pokemons?.map((pokemon: any): string => pokemon.name)}
                    error={!!errors?.pokemons}
                    helperText={errors?.pokemons?.message?.toString()}
                  />
                );
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
