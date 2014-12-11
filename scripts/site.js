$(document).ready(function () {

    //function - to get outer html
    $.fn.outerHTML = function () {
        return (!this.length) ? this : (this[0].outerHTML || (function (el) {
            var div = document.createElement('div');
            div.appendChild(el.cloneNode(true));
            var contents = div.innerHTML;
            div = null;
            return contents;
        })(this[0]));
    }

    var openModal = function (button) {
        button.click(function () {
            var url = $(this).data('url'),
                options = $(this).data('options');

            $.get(url, function (data) {
                $('#modal-content').html(data);

                $('.js-modal .modal-dialog').addClass(options);

                $('.js-modal').modal('show');
            });
        });

        $('.js-modal').on('hide.bs.modal', function () {
            $('.js-modal .modal-dialog').attr('class', 'modal-dialog');
        })
    };

    var bulkAction = function () {
        var dataTable = $('.js-data-table'),
            edit = $('.js-edit'),
            remove = $('.js-remove'),
            self,
            row;

        $('input', dataTable).on('click', function () {
            self = $(this);
            row = self.parents('tr');

            if (!row.hasClass('active')) {
                row.addClass('active');
            } else {
                row.removeClass('active');
            }

            if ($('tr.active', dataTable).length === 1) {
                edit.removeAttr('disabled');
            } else {
                edit.attr('disabled', true);
            }

            if ($('tr.active', dataTable).length > 0) {
                remove.removeAttr('disabled')
            } else {
                remove.attr('disabled', true);
            }
        });

        deleteRow();
    };

    var deleteRow = function () {
        var dataTable = $('.js-data-table'),
            remove = $('.js-remove');

        openModal(remove);

        $('.js-modal').on('shown.bs.modal', function (e) {
            $('.js-delete-row').on('click', function () {
                $('tr.active', dataTable).remove();
                $('.js-modal').modal('hide');
            })
        });
    };

    var addRow = function () {
        $('.js-add').on('click', function () {
            var appendElement = $(this).parents('.row-with-buttons'),
                html = '<div class="form-group row-with-buttons">' +
                    '<input type="text" class="form-control" id="goods">' +
                    '<div class="btn-holder">' +
                    '<button type="button" class="btn btn-default js-delete">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></div></div>';

            appendElement.after(html);

            removeFormRow();
        });
    };

    var removeFormRow = function () {
        $('.js-delete').on('click', function () {
            $(this).parents('.row-with-buttons').remove();
        });
    };

    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('.dropdown-toggle').dropdown();

    //init functions
    openModal($('.js-open-modal'));
    bulkAction();
    $('.js-modal').on('shown.bs.modal', function (e) {
        addRow();
        removeFormRow();
    });
});