const isOfType = (() => {
    // создаем пустую коллекцию без прототипа
    const type = Object.create(null);
  
    // проверка на null
    type.null = x => x === null;
    // проверка на undefined
    type.undefined = x => x === undefined;
    // проверка на nil - сюда относятся и null, и undefined
    type.nil = x => type.null(x) || type.undefined(x);
  
    // проверка на строку и литерал String: 
    // 's', "S", new String()
    type.string = x => !type.nil(x) 
         && (typeof x === 'string' || x instanceof String);
  
    // проверка на число и литерал числа: 12, 30.5, new Number()
    // для NaN и Infinity оператор typeof также возвращает 'number',
    // поэтому их нужно исключить
    type.number = x => !type.nil(x) && ( 
      (!isNaN(x) && isFinite(x) && typeof x === 'number')
      || x instanceof Number);
  
    // проверка на булевое значение и литерал Boolean: 
    // true, false, new Boolean()
    type.boolean = x => !type.nil(x) && 
      (typeof x === 'boolean' || x instanceof Boolean);
  
    // проверка на массив
    type.array = x => !type.nil(x) && Array.isArray(x);
  
    // проверка на объект и литерал объекта: 
    // {}, new Object(), Object.create(null)
    type.object = x => ({}).toString.call(x) === '[object Object]';
  
    // проверка на конкретный тип
    type.type = (x, X) => !type.nil(x) && x instanceof X;
  
    // проверка на Set
    type.set = x => type.type(x, Set);
    // проверка на Map
    type.map = x => type.type(x, Map);
    // проверка на Date
    type.date = x => type.type(x, Date);
  
    return type;
  })();