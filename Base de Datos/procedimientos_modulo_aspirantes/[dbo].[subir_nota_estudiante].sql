USE [Registro2]
GO
/****** Object:  StoredProcedure [dbo].[subir_nota_estudiante]    Script Date: 27/11/2023 19:56:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[subir_nota_estudiante]
	@p_identidad nvarchar(13),
	@p_tipo_examen int,
	@p_nota float

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	-- agregar si no esta el resultado no existe o no esta subido .
	IF NOT EXISTS (
		select * from resultados_examen_admision r 
		where r.id_persona= @p_identidad
		and r.id_tipo_examen = @p_tipo_examen
	)BEGIN
		declare @id int ;
		set @id = (select id_aspirante from aspirantes where id_persona = @p_identidad);
		if @id is not null
		begin
			insert into resultados_examen_admision(id_aspirante,id_persona,id_tipo_examen,nota)
			values (
				(@id),
				@p_identidad,
				@p_tipo_examen,
				@p_nota
			)
		end

		    
	END
	
	select * from resultados_examen_admision r where r.id_persona = @p_identidad;
	
	
	
END

