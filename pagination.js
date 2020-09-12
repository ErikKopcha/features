this.options = {
  pageIndex: 1, // номер сторінки
  pageSize: 6 // к-ть адрес на одну сторінку
};

this.onPageNavigate = this.onPageNavigate.bind(this);

this.pager = document.createElement('div');
this.pager.classList.add('pag');
this.spendingsPager = new CustomPager(this.pager, {
  pageIndex: this.options.pageIndex,
  pageSize: this.options.pageSize,
  totalItems: 0,
  range: 1
}, this.onPageNavigate);

this.messagesForUserElements.table.appendChild(this.pager);

// Подія, навігація по сторінкам, пагінація
onPageNavigate(index) {
  this.options.pageIndex = index;
  this.__loadMessages();
}

var model = {
  execType: 'POST',
  method: `/administrator/info-messages/load`,
  jsonData: {
    pageIndex: this.options.pageIndex,
    pageSize: this.options.pageSize,
  }
};
ExecuteActionString(
  model, {
    control: self
  },
  function (response) {
    if (response.statusCode == 200) {
      self.spendingsPager.refresh(response.data.PageIndex, response.data.TotalItems);

      if (response.data.TotalItems <= 6) {
        self.pager.style.display = 'none';
      } else {
        self.pager.style.display = 'block';
      }
    }
  },
  function (response) {});










class CustomPager {
  constructor(container, {
    pageIndex,
    pageSize,
    totalItems,
    range
  }, onClick) {
    this.fields = {
      container
    };
    this.options = {
      pageIndex,
      pageSize,
      totalItems,
      range
    };
    this.onClick = onClick;
  }

  get totalPages() {
    return Math.ceil(this.options.totalItems / this.options.pageSize);
  }

  clear() {
    this.fields.container.innerHTML = '';
  }

  createLi(isActive) {
    const li = document.createElement('LI');
    li.classList.add('page-item');
    if (isActive) {
      li.classList.add('active');
    }
    return li;
  }

  createA() {
    const a = document.createElement('A');
    a.classList.add('page-link');
    a.setAttribute('href', '#');
    return a;
  }

  render() {
    this.clear();
    const ul = document.createElement('UL');
    ul.classList.add('pagination', 'pagination-sm');
    let li, a, span;

    const totalPages = this.totalPages;
    let start = this.options.pageIndex - this.options.range,
      end = this.options.pageIndex + this.options.range;

    if (end > totalPages) {
      end = totalPages;
      start = totalPages - this.options.range * 2;
      start = Math.max(1, start);
    }

    if (start <= 1) {
      start = 1;
      end = Math.min(this.options.range * 2 + 1, totalPages);
    }

    //prev
    li = this.createLi(false);
    if (this.options.pageIndex <= 1) {
      li.classList.add('disabled');
    }
    a = this.createA();
    a.setAttribute('aria-label', 'Previous');
    span = document.createElement('SPAN');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '«';
    a.appendChild(span);
    a.addEventListener('click', function (i, e) {
      e.preventDefault();
      this.onClick(i);
    }.bind(this, this.options.pageIndex - 1));
    li.appendChild(a);
    ul.appendChild(li);

    for (let i = start; i <= end; i++) {
      li = this.createLi(i === this.options.pageIndex)
      a = this.createA();
      a.innerHTML = i;
      a.addEventListener('click', function (i, e) {
        e.preventDefault();
        this.onClick(i);
      }.bind(this, i));
      li.appendChild(a);
      ul.appendChild(li);
    }

    // next
    li = this.createLi(false);
    if (this.options.pageIndex >= totalPages) {
      li.classList.add('disabled');
    }
    a = this.createA();
    a.setAttribute('aria-label', 'Next');
    span = document.createElement('SPAN');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '»';
    a.appendChild(span);
    a.addEventListener('click', function (i, e) {
      e.preventDefault();
      this.onClick(i);
    }.bind(this, this.options.pageIndex + 1));
    li.appendChild(a);
    ul.appendChild(li);

    this.fields.container.appendChild(ul);
  }

  refresh(pageIndex, totalItems) {
    this.options.pageIndex = pageIndex;
    this.options.totalItems = totalItems;
    this.render();
  }
}