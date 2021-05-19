import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setInitialValue(lang);
  };

  const lang = [
    { name: 'LT', value: 'lt' },
    { name: 'RU', value: 'ru' },
    { name: 'EN', value: 'en' }
  ];

  const initialLanguageStatus = JSON.parse(localStorage.getItem('initialLanguage')) || 'lt';
  const [initialValue, setInitialValue] = useState(initialLanguageStatus);

  useEffect(() => {
    localStorage.setItem('initialLanguage', JSON.stringify(initialValue));
  }, [changeLanguage]);

  return (
    <div>
      <select className='btn btn-outline-primary' onChange={(e) => changeLanguage(e.target.value)} value={initialValue}>
        {lang.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
