import { restartWebflow } from '@finsweet/ts-utils';

export const globalVariables = () => {
  document.querySelectorAll('[data-variable]').forEach((element) => {
    const variableName = element.innerHTML.split('=')[0].trim();
    const variableValue = element.innerHTML.split('=')[1].trim();

    const variableNameEscaped = variableName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(`${variableNameEscaped}`, 'g');

    document.body.innerHTML = document.body.innerHTML.replace(regex, variableValue);
    restartWebflow();
  });
};
