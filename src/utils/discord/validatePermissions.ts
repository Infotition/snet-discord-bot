//* ------------------- DEPENDENCIES ------------------ *\\

//* Consts
import validPermissions from '../../consts/discord/validPermissions';

//* --------------- ValidatePermissions --------------- *\\

function validatePermissions(permissions: Array<string>) {
  permissions.forEach((permission: string) => {
    if (!validPermissions.includes(permission)) {
      throw new Error(`unknown permission node "${permission}`);
    }
  });
}

//* --------------------- EXPORTS --------------------- *\\

export default validatePermissions;
