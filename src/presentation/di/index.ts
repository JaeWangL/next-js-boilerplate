/* eslint-disable import/no-anonymous-default-export, react-hooks/rules-of-hooks */
import infrastructures from './infrastructures';
import repositories from './repositories';
import useCases from './useCases';

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = useCases(cInfrastructures, cRepositories);

export default {
  auth: cUseCases.auth,
};
