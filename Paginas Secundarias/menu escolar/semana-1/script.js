document.addEventListener('DOMContentLoaded', function () {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const horarioBody = document.getElementById('horario-body');

    const horario = [
        { dia: 'Lunes', hora: '08:00 AM', comida: 'Arroz blanco con gandules, pollo y ensalda' },
        { dia: 'Martes', hora: '12:30 PM', comida: 'Arroz blanco con habichuelas rojas y huevo hervido' },
        { dia: 'Miércoles', hora: '07:00 PM', comida: 'Pasta' },
        { dia: 'Jueves', hora: '01:00 PM', comida: 'Sopa de Tomate' },
        { dia: 'Viernes', hora: '06:30 PM', comida: 'Pizza' },
    ];

    horario.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.dia}</td><td>${item.hora}</td><td>${item.comida}</td>`;
        horarioBody.appendChild(row);
    });
});
