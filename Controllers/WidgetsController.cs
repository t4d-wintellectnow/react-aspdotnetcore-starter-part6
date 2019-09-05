using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using WidgetsApp.Models;

namespace WidgetsApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class WidgetsController: ControllerBase
  {
    private readonly WidgetsContext _context;

    public WidgetsController(WidgetsContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Widget>>> AllWidgets()
    {
      return await _context.Widgets.ToListAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Widget>> OneWidget(int id)
    {
      if (id < 1)
      {
        return BadRequest();
      }

      var widget = await _context.Widgets.FirstOrDefaultAsync(w => w.Id == id);

      if (widget == null)
      {
        return NotFound();
      }

      return widget;
    }

    [HttpPost]
    public async Task<ActionResult<Widget>> CreateWidget([FromBody] Widget widget)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest();
      }

      _context.Add(widget);
      await _context.SaveChangesAsync();

      return widget;
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<Widget>> ReplaceWidget(
      int id,
      [FromBody] Widget widget)
      {

        if (id < 1 || widget == null || id != widget.Id)
        {
          return BadRequest();
        }

        if (!ModelState.IsValid)
        {
          return BadRequest();
        }

        var oldWidget = await _context.Widgets
                                      .AsNoTracking()
                                      .FirstOrDefaultAsync(w => w.Id == id);
        
        if (oldWidget == null)
        {
          return NotFound();
        }

        _context.Update(widget);
        await _context.SaveChangesAsync();

        return oldWidget;
      }


    [HttpDelete("{id:int}")]
    public async Task<ActionResult<Widget>> DeleteWidget(int id)
    {
      if (id < 1)
      {
        return BadRequest();
      }

      var oldWidget = await _context.Widgets.FindAsync(id);

      if (oldWidget == null)
      {
        return NotFound();
      }

      _context.Remove(oldWidget);
      await _context.SaveChangesAsync();

      return oldWidget;
    }
  }
}