'use strict';

function isNonExportStatement(_ref) {
  let type = _ref.type;

  return type !== 'ExportDefaultDeclaration' && type !== 'ExportNamedDeclaration' && type !== 'ExportAllDeclaration';
}

module.exports = {
  create: function (context) {
    return {
      Program: function (_ref2) {
        let body = _ref2.body;

        const lastNonExportStatementIndex = body.reduce(function findLastIndex(acc, item, index) {
          if (isNonExportStatement(item)) {
            return index;
          }
          return acc;
        }, -1);

        if (lastNonExportStatementIndex !== -1) {
          body.slice(0, lastNonExportStatementIndex).forEach(function checkNonExport(node) {
            if (!isNonExportStatement(node)) {
              context.report({
                node,
                message: 'Export statements should appear at the end of the file'
              });
            }
          });
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2V4cG9ydHMtbGFzdC5qcyJdLCJuYW1lcyI6WyJpc05vbkV4cG9ydFN0YXRlbWVudCIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlIiwiY29udGV4dCIsIlByb2dyYW0iLCJib2R5IiwibGFzdE5vbkV4cG9ydFN0YXRlbWVudEluZGV4IiwicmVkdWNlIiwiZmluZExhc3RJbmRleCIsImFjYyIsIml0ZW0iLCJpbmRleCIsInNsaWNlIiwiZm9yRWFjaCIsImNoZWNrTm9uRXhwb3J0Iiwibm9kZSIsInJlcG9ydCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0Esb0JBQVQsT0FBd0M7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ3RDLFNBQU9BLFNBQVMsMEJBQVQsSUFDTEEsU0FBUyx3QkFESixJQUVMQSxTQUFTLHNCQUZYO0FBR0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pCLFdBQU87QUFDTEMsZUFBUyxpQkFBb0I7QUFBQSxZQUFSQyxJQUFRLFNBQVJBLElBQVE7O0FBQzNCLGNBQU1DLDhCQUE4QkQsS0FBS0UsTUFBTCxDQUFZLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxJQUE1QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDdkYsY0FBSWIscUJBQXFCWSxJQUFyQixDQUFKLEVBQWdDO0FBQzlCLG1CQUFPQyxLQUFQO0FBQ0Q7QUFDRCxpQkFBT0YsR0FBUDtBQUNELFNBTG1DLEVBS2pDLENBQUMsQ0FMZ0MsQ0FBcEM7O0FBT0EsWUFBSUgsZ0NBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDdENELGVBQUtPLEtBQUwsQ0FBVyxDQUFYLEVBQWNOLDJCQUFkLEVBQTJDTyxPQUEzQyxDQUFtRCxTQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMvRSxnQkFBSSxDQUFDakIscUJBQXFCaUIsSUFBckIsQ0FBTCxFQUFpQztBQUMvQlosc0JBQVFhLE1BQVIsQ0FBZTtBQUNiRCxvQkFEYTtBQUViRSx5QkFBUztBQUZJLGVBQWY7QUFJRDtBQUNGLFdBUEQ7QUFRRDtBQUNGO0FBbkJJLEtBQVA7QUFxQkQ7QUF2QmMsQ0FBakIiLCJmaWxlIjoicnVsZXMvZXhwb3J0cy1sYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXNOb25FeHBvcnRTdGF0ZW1lbnQoeyB0eXBlIH0pIHtcbiAgcmV0dXJuIHR5cGUgIT09ICdFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24nICYmXG4gICAgdHlwZSAhPT0gJ0V4cG9ydE5hbWVkRGVjbGFyYXRpb24nICYmXG4gICAgdHlwZSAhPT0gJ0V4cG9ydEFsbERlY2xhcmF0aW9uJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBQcm9ncmFtOiBmdW5jdGlvbiAoeyBib2R5IH0pIHtcbiAgICAgICAgY29uc3QgbGFzdE5vbkV4cG9ydFN0YXRlbWVudEluZGV4ID0gYm9keS5yZWR1Y2UoZnVuY3Rpb24gZmluZExhc3RJbmRleChhY2MsIGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGlzTm9uRXhwb3J0U3RhdGVtZW50KGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCAtMSlcblxuICAgICAgICBpZiAobGFzdE5vbkV4cG9ydFN0YXRlbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGJvZHkuc2xpY2UoMCwgbGFzdE5vbkV4cG9ydFN0YXRlbWVudEluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIGNoZWNrTm9uRXhwb3J0KG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghaXNOb25FeHBvcnRTdGF0ZW1lbnQobm9kZSkpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0V4cG9ydCBzdGF0ZW1lbnRzIHNob3VsZCBhcHBlYXIgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZScsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG59XG4iXX0=