

$(document).ready(function () {
    $('.mark-done').click(function (event) {
        console.log(event);
        var form = event.currentTarget.form;
        var taskDoneNode = form.TaskDone;
        console.log(taskDoneNode.value);
        console.log(form.action);
        $.ajax({
            url: form.action,
            data: {
                TaskDone: taskDoneNode.value
            },
            method: 'POST',
            success: function () {
                if (taskDoneNode.value == "True") {
                    $(event.currentTarget).find('.glyphicon').addClass('glyphicon-check').removeClass('glyphicon-unchecked');
                    taskDoneNode.value = 'False';
                } else {
                    $(event.currentTarget).find('.glyphicon').addClass('glyphicon-unchecked').removeClass('glyphicon-check');
                    taskDoneNode.value = 'True';
                }
            }
        });
        return false;
    });
});